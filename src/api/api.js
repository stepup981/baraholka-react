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

  getProducts() {
    const statusQuery = false;
    return this.makeRequest("products", "GET", statusQuery);
  }

  rebaseStatusOnBag(statusOnBag) {
    const { id, onBag } = statusOnBag;
    return this.makeRequest(
      `products/${id}`,
      "PATCH",
      true,
      JSON.stringify({ onBag: onBag })
    );
  }

  getBag() {
    return this.makeRequest("bag");
  }

  addProductOnBag(product) {
    return this.makeRequest("bag", "POST", true, JSON.stringify(product));
  }

  removeProductOnBag(productId) {
    return this.makeRequest(
      `bag/${productId}`,
      "DELETE",
      true,
      JSON.stringify({ id: productId })
    );
  }
}

export default new Api(`https://1889268ad06ce1f2.mokky.dev`);
