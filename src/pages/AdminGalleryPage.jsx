import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase/config";
import { useLanguage } from "../components/LanguageContext";
import { getText } from "../data/i18n";

const CATEGORY_OPTIONS = [
  {
    value: "galleryPhotos",
    labelKey: "admin_category_gallery_label",
    descriptionKey: "admin_category_gallery_desc",
  },
  {
    value: "recentPhotos",
    labelKey: "admin_category_recent_label",
    descriptionKey: "admin_category_recent_desc",
  },
];

const createId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
};

function AdminGalleryPage() {
  const { language } = useLanguage();
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0].value);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [adminKeyInput, setAdminKeyInput] = useState("");

  const adminKey = import.meta.env.VITE_ADMIN_KEY;
  const isLocked = Boolean(adminKey) && adminKeyInput !== adminKey;

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileChange = (event) => {
    const selected = event.target.files?.[0];
    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      setError(getText(language, "admin_invalid_image"));
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    setError("");
    setSuccess("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLocked) {
      setError(getText(language, "admin_key_required"));
      return;
    }

    if (!file) {
      setError(getText(language, "admin_choose_image"));
      return;
    }

    setUploading(true);
    setProgress(0);
    setError("");
    setSuccess("");

    const fileId = createId();
    const safeName = file.name.replace(/\s+/g, "-").toLowerCase();
    const storagePath = `${category}/${fileId}-${safeName}`;

    const storageRef = ref(storage, storagePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const pct = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(pct);
      },
      (err) => {
        setError(err.message || getText(language, "admin_upload_failed"));
        setUploading(false);
      },
      async () => {
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, category), {
            url: downloadUrl,
            caption: caption.trim(),
            createdAt: serverTimestamp(),
            originalName: file.name,
            size: file.size,
            contentType: file.type,
          });

          setSuccess(getText(language, "admin_upload_complete"));
          setFile(null);
          setCaption("");
          setPreviewUrl("");
          setProgress(0);
        } catch (err) {
          setError(err.message || getText(language, "admin_upload_save_failed"));
        } finally {
          setUploading(false);
        }
      }
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-emerald-700/80 mb-3">
            {getText(language, "admin_kicker")}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {getText(language, "admin_title")}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            {getText(language, "admin_desc")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-6 sm:p-8 space-y-6"
        >
          {adminKey && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getText(language, "admin_key_label")}
              </label>
              <input
                type="password"
                value={adminKeyInput}
                onChange={(event) => setAdminKeyInput(event.target.value)}
                placeholder={getText(language, "admin_key_placeholder")}
                className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <p className="text-xs text-gray-500 mt-2">
                {getText(language, "admin_key_helper")}
              </p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            {CATEGORY_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`cursor-pointer rounded-2xl border px-4 py-4 transition-all ${
                  category === option.value
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200 hover:border-emerald-300"
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value={option.value}
                  checked={category === option.value}
                  onChange={() => setCategory(option.value)}
                  className="sr-only"
                />
                <p className="text-sm font-semibold text-gray-900">
                  {getText(language, option.labelKey)}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {getText(language, option.descriptionKey)}
                </p>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getText(language, "admin_photo_label")}
            </label>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
              disabled={uploading || isLocked}
            />
          </div>

          {previewUrl && (
            <div className="rounded-2xl border border-emerald-100 bg-slate-50 p-4">
              <img
                src={previewUrl}
                alt={getText(language, "admin_preview_alt")}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getText(language, "admin_caption_label")}
            </label>
            <input
              type="text"
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              placeholder={getText(language, "admin_caption_placeholder")}
              className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              disabled={uploading || isLocked}
            />
          </div>

          {uploading && (
            <div className="space-y-2">
              <div className="h-2 w-full rounded-full bg-emerald-100">
                <div
                  className="h-2 rounded-full bg-emerald-600 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500">
                {getText(language, "admin_upload_progress").replace(
                  "{progress}",
                  progress
                )}
              </p>
            </div>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-emerald-700">{success}</p>}

          <button
            type="submit"
            disabled={uploading || isLocked}
            className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 shadow-lg hover:from-emerald-700 hover:to-teal-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLocked
              ? getText(language, "admin_enter_key_button")
              : uploading
                ? getText(language, "admin_uploading_button")
                : getText(language, "admin_upload_button")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminGalleryPage;
