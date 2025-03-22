window.onload = () => {
    google.accounts.id.initialize({
      client_id: '990574923767-1jjb6m44co1u970qmn8j0t96n71jb9r7.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("google-signin-btn"),
      { theme: "outline", size: "large" }
    );
  };

  function handleCredentialResponse(response) {
    const jwt = response.credential;
    const userData = parseJwt(jwt);
    console.log("User Data:", userData);

    alert(`Welcome, ${userData.name}!`);
    window.location.href = "../LANDING-PAGE/index.html"; // Redirect after login
  }

  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = decodeURIComponent(atob(base64Url).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(base64);
}