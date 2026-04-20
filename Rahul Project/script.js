// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// ============================================
// 🔴 IMPORTANT: Yahan apni values change karein 🔴
// ============================================
// Step 1: EmailJS se Public Key copy karke yahan paste karein
// Step 2: Service ID aur Template ID bhi change karein
// ============================================

// 👇 YAHAN APNI VALUES DALEN 👇
const EMAILJS_PUBLIC_KEY = "rzeN8gQFfV2YevPoj";      // EmailJS se copy karein
const EMAILJS_SERVICE_ID = "service_36ns0lq";      // Email Services se
const EMAILJS_TEMPLATE_ID = "template_uqic99s";    // Email Templates se

// EmailJS Initialize
emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY,
});

// Form submit handler
const form = document.getElementById('contactForm');
const statusDiv = document.getElementById('formStatus');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('serviceInterest').value;
  const messageBody = document.getElementById('message').value.trim();
  
  if(!name || !email || !messageBody) {
    statusDiv.innerHTML = '<span class="text-danger">❌ Please fill Name, Email, and Message.</span>';
    return;
  }
  
  statusDiv.innerHTML = '<span class="text-primary">📧 Sending your message...</span>';
  
  // Template parameters for email
  const templateParams = {
    from_name: name,
    from_email: email,
    phone: phone,
    service_interest: service,
    message: messageBody,
    to_email: 'rahulkumar89gs@gmail.com'
  };
  
  // Send email using EmailJS
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(function(response) {
      statusDiv.innerHTML = '<span class="text-success">✅ Message sent successfully! Our team will contact you shortly.</span>';
      form.reset();
      setTimeout(() => statusDiv.innerHTML = '', 5000);
    })
    .catch(function(error) {
      console.error("EmailJS Error:", error);
      statusDiv.innerHTML = '<span class="text-danger">❌ Failed to send. Please try again or call us directly.</span>';
      setTimeout(() => statusDiv.innerHTML = '', 5000);
    });
});