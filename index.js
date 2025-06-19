// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQSHsqWhz5fxrLz0SWCWt8ssbDkZESK8k",
  authDomain: "project-test-78bff.firebaseapp.com",
  projectId: "project-test-78bff",
  storageBucket: "project-test-78bff.appspot.com",
  messagingSenderId: "841906112126",
  appId: "1:841906112126:web:c77389363f541addcd7a2f",
  measurementId: "G-ZF1SDNMNCT"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    login();
  });

  function login() {
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;

    auth.signInWithEmailAndPassword(regEmail, regPassword)
      .then((userCredential) => {
        document.getElementById("reg-message").innerText = "เข้าสู่ระบบสำเร็จ";
        window.location.href = "index3.html";
      })
      .catch((error) => {
        document.getElementById("reg-message").innerText = error.message;
      });
  }
}

// Register
const registerForm = document.getElementById("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    register();
  });

  function register() {
    const regName = document.getElementById("regName").value;
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;

    firebase.auth().createUserWithEmailAndPassword(regEmail, regPassword)
      .then((userCredential) => {
        document.getElementById("reg-message").innerText = "สมัครสำเร็จ";
        // window.location.href = "login.html"; // ถ้าจะเปลี่ยนหน้า
      })
      .catch((error) => {
        document.getElementById("reg-message").innerText = error.message;
      });
  }
}

//Forgot Password
document.getElementById("forgotForm").addEventListener("submit", function(e) {
  e.preventDefault(); // ป้องกันรีเฟรช
  sendReset();
});
function sendReset() {
  const email = document.getElementById("email").value;

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      document.getElementById("forgot-message").innerText =
        "ลิงก์รีเซ็ตรหัสผ่านถูกส่งไปที่อีเมลของคุณแล้ว ✅";
    })
    .catch((error) => {
      document.getElementById("forgot-message").innerText = error.message;
    });
}


function goToNextPage(page) {
  window.location.href = page;
}