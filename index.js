async function submit() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let massage = document.getElementsByTagName("textarea").massge.value;
  let body = {
    name,
    email,
    subject,
    massage,
  };
  let res = await fetch("http://localhost:4500/api/data", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  res = await res.json();
  console.log("res", res.data);
  console.log(body);
}
