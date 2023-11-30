$(() => {
    fetch("https://api.vectr.com/users/me", {
        headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
    })
    .then(res => {
        if(!res.ok) {
            return
        }

        return res.json()
    })
    .then(user => {
        const anonymous = user.email.endsWith("anonymous.com")

        if(!anonymous) {
            $("a:contains(LOGIN)").text((user.displayName || user.username || "").toUpperCase()).attr("href", "/design/login/")
        }
        $("button:contains(TRY NOW FOR FREE)").text("USE NOW")
    })
});