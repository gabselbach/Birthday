class Gabriella {
  constructor() {
    this.age = 30;
    this.role = "Software Developer";
    this.stack = ["Node.js", "MongoDB", "AWS", "Observability"];
    this.caffeineLevel = 0;
    this.mood = "booting...";
    this.logs = [];
  }

  log(message) {
    const time = new Date().toLocaleTimeString();
    const entry = `[${time}] ${message}`;
    this.logs.push(entry);
    this.renderLogs();
  }

  drinkCoffee(grams = 10) {
    this.caffeineLevel += grams;
    this.log(`☕ +${grams}g de café carregados`);
    this.updateMood();
    this.renderStatus();
  }

  updateMood() {
    if (this.caffeineLevel < 10) {
      this.mood = "booting... 😴";
    } else if (this.caffeineLevel < 30) {
      this.mood = "estável, mas monitorando 👀";
    } else {
      this.mood = "🔥 100% operacional — deploy liberado!";
    }
  }

  deployLife() {
    this.log("🚀 Iniciando deploy da Gabriella v30...");
    this.log("🔍 Executando checks de observabilidade...");
    this.log("✅ Sistema estável");
    this.log(`💡 "${this.getQuote()}"`);
  }

  getQuote() {
    return "Pequenas otimizações fazem grandes diferenças ☕✨";
  }

  renderStatus() {
    document.getElementById("caffeine").innerText = this.caffeineLevel;
    document.getElementById("mood").innerText = this.mood;
  }

  renderLogs() {
    const logContainer = document.getElementById("logs");
    logContainer.innerHTML = this.logs
      .slice(-6)
      .map(l => `<div>${l}</div>`)
      .join("");
  }
}

// init
const gabi = new Gabriella();

document.getElementById("coffeeBtn").onclick = () => gabi.drinkCoffee(10);
document.getElementById("deployBtn").onclick = () => gabi.deployLife();

// boot inicial
gabi.log("⚙️ initializing Gabriella v30...");
gabi.renderStatus();