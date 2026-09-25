import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MessageCircle,
  ExternalLink,
  Filter,
  Sparkles,
  ShieldCheck,
  Send,
  X,
  Share2,
} from 'lucide-react';
import { OFFICIAL_REVIEWS, FACEBOOK_PAGE_URL, BRAND_CONTACT } from '../data/brandData';
import { ReviewItem } from '../types';

export const FacebookReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(OFFICIAL_REVIEWS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // New review form state
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('Student');
  const [formLocation, setFormLocation] = useState('Pattoki');
  const [formRating, setFormRating] = useState(5);
  const [formCategory, setFormCategory] = useState<'pwwf' | 'admission' | 'parent'>('pwwf');
  const [formComment, setFormComment] = useState('');

  const handleLike = (id: string) => {
    if (likedReviews[id]) return;
    setLikedReviews((prev) => ({ ...prev, [id]: true }));
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const filteredReviews = reviews.filter((r) => {
    if (selectedCategory === 'all') return true;
    return r.category === selectedCategory;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: formName.trim(),
      role: formRole,
      location: formLocation.trim() || 'Punjab',
      rating: formRating,
      date: 'Just now',
      category: formCategory,
      source: 'Facebook',
      verifiedBadge: 'Pending Facebook Community Verification',
      comment: formComment.trim(),
      helpfulCount: 1,
      officialReply: 'Thank you for your valuable feedback! Our team truly appreciates your trust.',
    };

    setReviews([newRev, ...reviews]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsSubmitModalOpen(false);
      setFormName('');
      setFormComment('');
    }, 2000);
  };

  return (
    <section
      id="reviews"
      className="py-16 bg-white border-t border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1877F2] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200 shadow-2xs">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Official Facebook Community &amp; Verified Reviews</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A2342] tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Real Stories, Real Trust &amp; Student Reviews
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Read authentic reviews from students, parents, and industrial worker families across Pattoki, Kasur, and Punjab.
          </p>
        </div>

        {/* Facebook Page Highlight Banner */}
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#1877F2] via-[#166fe5] to-[#0d5ac1] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 -mr-8 -mt-8 opacity-10 pointer-events-none">
            <svg className="w-72 h-72 fill-white" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
                <span>Official Facebook Page</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span className="text-emerald-200">Live &amp; Verified</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Follow Scholar Sphere Consultants on Facebook
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Connect with our official Facebook community for timely merit lists, PWWF scholarship quota updates, college affiliation announcements, and live admission sessions.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-100 pt-1">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <strong>4.9 / 5</strong> Facebook Rating
                </span>
                <span>•</span>
                <span><strong>100%</strong> Free PWWF Guidance</span>
                <span>•</span>
                <span><strong>Pattoki Head Office:</strong> 1 KM Multan Road</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-[#1877F2] hover:bg-blue-50 font-black text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Visit Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#1877F2]" />
              </a>

              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#0A2342] text-white hover:bg-[#07192f] font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Rating Metrics & Category Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          
          {/* Quick Score */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-[#0A2342]">4.9</span>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-[11px] text-slate-500 font-semibold">
                  Overall Rating • 60+ Verified Reviews
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-slate-200" />

            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-600 font-medium">
              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine Affiliations
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-[#FF7A00] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> Zero Fee From Workers
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#0A2342] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Reviews ({reviews.length})
            </button>
            <button
              onClick={() => setSelectedCategory('pwwf')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'pwwf'
                  ? 'bg-[#0A2342] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              PWWF Scholarships
            </button>
            <button
              onClick={() => setSelectedCategory('admission')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'admission'
                  ? 'bg-[#0A2342] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Nursing &amp; Allied Health
            </button>
            <button
              onClick={() => setSelectedCategory('parent')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'parent'
                  ? 'bg-[#0A2342] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Parent Testimonials
            </button>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A2342] to-[#1877F2] text-white font-black text-sm flex items-center justify-center shrink-0">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#0A2342] leading-tight">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {rev.role} • <span className="text-slate-700 font-semibold">{rev.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Facebook Source Icon */}
                  <span
                    className="p-1 rounded-md bg-blue-50 text-[#1877F2] shrink-0"
                    title="Verified Facebook Review"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </span>
                </div>

                {/* Star Rating & Verified Badge */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{rev.verifiedBadge}</span>
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                {/* Director's Official Reply */}
                {rev.officialReply && (
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#0A2342] font-black text-[10px] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                      <span>Response from Director Armaghaan Rajput:</span>
                    </div>
                    <p className="italic text-slate-700">&ldquo;{rev.officialReply}&rdquo;</p>
                  </div>
                )}
              </div>

              {/* Bottom Helpful & Date Strip */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{rev.date}</span>
                <button
                  onClick={() => handleLike(rev.id)}
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-md transition-colors cursor-pointer ${
                    likedReviews[rev.id]
                      ? 'bg-blue-50 text-[#1877F2] font-bold'
                      : 'hover:bg-slate-100 text-slate-500'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Action Footer */}
        <div className="mt-12 text-center bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-black text-[#0A2342]">
              Have you consulted Scholar Sphere Consultants?
            </h4>
            <p className="text-xs text-slate-600">
              Share your honest admission or scholarship review on our Facebook page to help fellow students and parents.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
            >
              Write Review Here
            </button>
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#1877F2] hover:bg-blue-600 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Post on Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Review Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-[#0A2342]">Review Submitted Successfully!</h3>
                <p className="text-xs text-slate-600">
                  Thank you for your sincere review. It has been added to our live feed.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <span className="text-[10px] font-black text-[#FF7A00] uppercase tracking-wider">
                    Community Feedback
                  </span>
                  <h3 className="text-lg font-black text-[#0A2342]">Share Your Experience</h3>
                  <p className="text-xs text-slate-500">
                    Your feedback helps thousands of students and industrial workers make confident educational choices.
                  </p>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Overall Rating
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormRating(star)}
                        className="p-1 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= formRating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-bold text-slate-700">{formRating} out of 5</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Usman Rajput"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      City / Area
                    </label>
                    <input
                      type="text"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="e.g. Pattoki, Kasur, Chunian"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Role
                    </label>
                    <select
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:outline-hidden bg-white"
                    >
                      <option value="BS Nursing Student">BS Nursing Student</option>
                      <option value="Allied Health Student">Allied Health Student</option>
                      <option value="Parent of Student">Parent of Student</option>
                      <option value="Registered Factory Worker">Registered Factory Worker</option>
                      <option value="DPT / Pharm-D Student">DPT / Pharm-D Student</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Review Category
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value as any)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:outline-hidden bg-white"
                    >
                      <option value="pwwf">PWWF 100% Scholarship</option>
                      <option value="admission">Admissions &amp; Degree Programs</option>
                      <option value="parent">Parent Experience</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Detailed Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    placeholder="Describe your consultation experience with Armaghaan Rajput and the team, college verification, or PWWF application..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:outline-hidden resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg bg-[#FF7A00] hover:bg-[#e66e00] text-white font-black text-xs flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Publish Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
