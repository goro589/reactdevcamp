const url = 'https://dev.codekit.co/devcamp-api/friends.txt';

axios.get(url).then((response) => {
    // handle success
    const allFriends = response.data
    console.log(allFriends.filter((x) => x["gender"] === "male" && x["friends"].length >= 2).map((x) => x = {"name": x["name"],"gender": x["gender"],"company": x["company"],"email": x["email"],"friends": x["friends"],"balance": "$" + parseFloat(x["balance"].substring(1).replace(",", "")/10).toFixed(2)}))
  })
  .catch((error) => {
    // handle errors
  });
