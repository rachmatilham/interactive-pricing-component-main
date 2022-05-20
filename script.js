const pageviews = ["10K", "50K", "100K", "500K", "1M"];
const prices = [8, 12, 16, 24, 36];

const pageviewsElement = document.querySelector(".pageviews");
const priceNumberElement = document.querySelector(".price-number");
const pricingUnitElement = document.querySelector(".pricing-unit");
const sliderElement = document.querySelector(".slider");
const toggleElement = document.querySelector(".toggle");

function priceHandler() {
  let i = sliderElement.value - 1;

  pageviewsElement.textContent = `${pageviews[i]} pageviews`;
  priceNumberElement.textContent = `$${prices[i]}.00`;
  pricingUnitElement.textContent = `/ month`;

  if (toggleElement.firstElementChild.classList.contains("annually")) {
    priceNumberElement.textContent = `$${prices[i] * 12 * 0.75}.00`;
    pricingUnitElement.textContent = `/ year`;
  }
}

sliderElement.addEventListener("input", priceHandler());
toggleElement.addEventListener("click", () => {
  toggleElement.firstElementChild.classList.toggle("annually");
  priceHandler();
});

priceHandler();
