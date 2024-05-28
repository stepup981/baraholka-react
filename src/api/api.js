class Api {
  constructor(domain) {
    this.domain = domain;
  }

  async makeRequest(
    endpoint,
    method = "GET",
    includeQuery = true,
    data = null
  ) {
    const query = window.location.search;
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: data,
    };

    const response = await fetch(
      includeQuery
        ? `${this.domain}/${endpoint}`
        : `${this.domain}/${endpoint}${query}`,
      options
    );
    if (response.ok) return response.json();

    return alert("Что-то не так");
  }

  getCategories() {
    return this.makeRequest("categories");
  }

  getProducts(categoriesFilter) {
    const statusQuery = false;
    return this.makeRequest("products", "GET", statusQuery);
  }

  getBag() {
    return this.makeRequest("bag");
  }

  addProductOnBag(data) {
    return this.makeRequest("bag", "POST");
  }
}

export default new Api(`https://1889268ad06ce1f2.mokky.dev`);
