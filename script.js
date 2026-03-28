let model;

async function loadModel() {
    model = await tf.loadLayersModel('model.json');
}

// Предсказание
async function predict() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const x2 = parseFloat(document.getElementById('x2').value);

    if (isNaN(x1) || isNaN(x2)) {
        document.getElementById("result").innerText = "Введите корректные числа!";
        return;
    }

    // Векторизация входных данных
    const input = tf.tensor2d([[x1, x2]]);

    // Предсказание
    const prediction = model.predict(input);
    const result = await prediction.data();

    document.getElementById("result").innerText =
        `Результат: ${result[0].toFixed(4)}`;
}

// Загрузка модели при старте
loadModel();
