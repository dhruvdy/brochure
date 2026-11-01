// Connects the brochure form to the "Arkvvaa" Google Form. See README.md, step 1.
//
// formId is the long id in the form's link: docs.google.com/forms/d/e/<formId>/viewform
// Each field is the Google Form question's entry id. Company and Job title only appear on the
// page once you add those questions to the Google Form and put their entry ids here.
// Set formId to '' to turn saving off.
window.LEAD_FORM = {
  formId: '1FAIpQLSczNFGdQPsrIsRBq729CdxLd_SThb97sCl9OMq1xgi_Hf29Lg',
  fields: {
    name: 'entry.831054422', // Name
    email: 'entry.684881330', // Email
    phone: 'entry.453833809', // Phone Number (required in the Google Form)
    interest: 'entry.1430158444', // Area of Interest
    company: '',
    role: '',
  },
}
