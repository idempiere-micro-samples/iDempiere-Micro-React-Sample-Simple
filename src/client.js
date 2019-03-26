
export function login(userName, password, callback) {
    fetch("http://localhost:9080/idempiere-micro-liberty-standalone/session/" + userName + "/login/" + password)
    .then((response) => response.json())
    .then((data) => {
        callback(data);
    });
}

export function loadBusinessPartners(token, callback) {
    fetch("http://localhost:9080/idempiere-micro-liberty-standalone/graphql",
      {
        method: "POST",      
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
          query: "query { businessPartners { id name searchKey } }"
        })
      }
    )
    .then((response) => response.json())
    .then((data) => {
        callback(data.data.businessPartners);
    });
  }