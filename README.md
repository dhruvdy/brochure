# ARKVVAA brochure page

When someone scans the QR code, this page shows the brochure cover, blurs it after a moment and
asks for their details. Once they submit, the brochure opens and they can download the PDF.
Their answers are saved in a Google Form, which can feed a Google Sheet. On the same phone they
are only asked once.

## 1. Make the Google Form (about 5 minutes)

1. Go to forms.google.com and create a blank form called "ARKVVAA brochure leads".
2. Add these questions, in any order. **Leave every question optional** (the page itself checks
   the required ones; a "required" question in Google Forms can silently reject a submission).
   - Full name: Short answer
   - Work email: Short answer
   - Company: Short answer
   - Job title: Short answer
   - Phone: Short answer
   - Area of interest: Dropdown, with exactly these options:
     `GridKavach AI demo`, `Cybersecurity assessment or compliance`, `Digital engineering and automation`,
     `Digital twin, HIL or simulation`, `AI or data solution`, `Engineering talent or staffing`, `Other`
3. In **Settings > Responses**, set "Collect email addresses" to **Do not collect**, and turn off
   any option that requires signing in.
4. In the **Responses** tab, click **Link to Sheets** to get a spreadsheet of leads.
5. `config.js` holds the form's id and the entry id of each question. It is already set up for
   the "Arkvvaa" form (Name, Email, Phone Number, Area of Interest). If you add Company or
   Job title questions later, use **Get pre-filled link** to find their entry ids
   (`entry.123456789`) and put them in `config.js`. Those fields then appear on the page.
   Keep personal details out of `config.js`: it is public once uploaded.

## 2. Put the page on GitHub Pages (free)

1. Sign in at github.com and create a **New repository**, for example named `brochure`.
   Make it **Public** (free GitHub Pages needs a public repository).
2. In the new repository, click **Add file > Upload files** and drag in everything inside this
   folder (the files and the `pages` and `fonts` folders, not the folder itself). Click **Commit changes**.
3. Go to **Settings > Pages**. Under "Build and deployment", choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, and click **Save**.
4. After a minute the page is live at `https://<your-username>.github.io/brochure/`.

To update the page later, upload the changed files again in the same way.

## 3. Test it, then make the QR code

Open the link on your phone, fill in the form, and check that the answer appears in the Google
Form's Responses tab. Then make the QR code from the final link.

To see the form again on a phone that has already submitted, open the page in a private tab.

Note: the blur is a light gate for an expo, not protection. Anyone who knows the PDF's address
can open it directly.
