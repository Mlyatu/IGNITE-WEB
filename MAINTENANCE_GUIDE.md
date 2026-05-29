# IGNITE Website - Maintenance Guide

## 1. BLOG & EVENTS MANAGEMENT

### How It Works
- Blog posts are stored in `data/blog.json` (NOT hard-coded in HTML)
- `pages/blog.html` automatically reads from this JSON file
- When you add/edit posts in the JSON, they appear on the blog page automatically

### How to Add/Edit Events

**Location:** `/data/blog.json`

**Template for adding a new post:**
```json
{
  "id": 4,
  "title": "Your Event Title Here",
  "date": "May 20, 2026",
  "author": "Your Name",
  "category": "Education",
  "image": "../images/wedo/picture1.png",
  "excerpt": "Short summary of the event (2-3 sentences)",
  "content": "Full detailed description of the event goes here. This is shown when someone clicks 'Read More'"
}
```

**Field Explanations:**
- `id`: Unique number (increment by 1 each time)
- `title`: Event/blog post title
- `date`: Publication date
- `author`: Who wrote it
- `category`: Type (Education, STEM, Community, etc.)
- `image`: Path to image (should be in `images/wedo/` folder)
- `excerpt`: Brief preview (shows on card)
- `content`: Full text (shows when user clicks "Read More")

**Example:**
```json
{
  "id": 4,
  "title": "Women in STEM Workshop",
  "date": "May 25, 2026",
  "author": "Ignite Team",
  "category": "STEM",
  "image": "../images/wedo/picture5.jpeg",
  "excerpt": "We conducted an empowering workshop for 40 young women in tech careers.",
  "content": "Yesterday, we hosted our Women in STEM workshop with 40 participants. The sessions covered web development, cybersecurity, and career guidance. All attendees walked away inspired and equipped with new knowledge!"
}
```

**Tips:**
- Keep JSON format correct (commas between fields, proper brackets)
- Use `.jpeg`, `.png` images from the `images/wedo/` folder
- Excerpt should be 1-2 sentences max
- Content can be as long as you want

---

## 2. CONTACT FORM - EMAIL INTEGRATION

### How It Works
- Form is connected to **Formspree** (free email service)
- When someone fills the form, it sends to: `ignitefoundation.edu@gmail.com`
- Also captures their info (name, email, phone, message)

### Current Setup
- Email goes to: `ignitefoundation.edu@gmail.com`
- Form: `pages/contact.html`

### To Change Recipient Email
1. Go to `pages/contact.html`
2. Find: `action="https://formspree.io/f/xvgeojqp"`
3. To get a new form ID:
   - Go to [formspree.io](https://formspree.io)
   - Sign up free
   - Create new form
   - Replace the form ID in the `action` attribute

---

## 3. SMS INTEGRATION (For Phone Notifications)

**Current Status:** Email works. SMS requires a backend.

**Options to add SMS:**

### Option A: Twilio (Recommended)
- Costs: ~$0.01 per SMS (free trial available)
- Works worldwide
- Reliable
- Requires: Node.js backend server

### Option B: Custom Backend
- Use Node.js + Express + Twilio
- Full control
- More complex to set up

### For Now:
- Owner can manually copy messages from email
- Or use phone forwarding rules in email

---

## 4. QUICK REFERENCE

### File Locations
```
/data/blog.json              ← Edit this to add/update blog posts
/pages/blog.html             ← Displays blog (don't edit)
/pages/contact.html          ← Contact form (don't edit form action)
/images/wedo/                ← Store event photos here
```

### Common Tasks

**Add a blog post:**
1. Open `data/blog.json`
2. Add new entry at the end (before closing bracket)
3. Save
4. Blog page updates automatically ✓

**Change contact email recipient:**
1. Set up Formspree account
2. Update form ID in `contact.html`
3. Done ✓

**Update event images:**
1. Add image to `images/wedo/` folder
2. Reference in `blog.json` with: `"image": "../images/wedo/your-image.png"`
3. Done ✓

---

## 5. FUTURE UPGRADES

When organization grows:
- Add SMS notifications via Twilio
- Add backend for more complex features
- Add event registrations
- Add donation system
- Add admin dashboard to manage posts from web UI

---

**Questions?** Contact your tech coordinator John Mlyatu for advanced customization.
