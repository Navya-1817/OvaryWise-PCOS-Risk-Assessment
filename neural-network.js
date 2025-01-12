class NeuralNetwork {
    constructor(inputSize = 10, hiddenSize = 8, outputSize = 1) {
        // Further mildified weights for PCOS risk assessment
        this.weights = {
            inputHidden: [
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
                [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01]
            ],
            hiddenOutput: [
                [0.01],
                [0.01],
                [0.01],
                [0.01],
                [0.01],
                [0.01],
                [0.01],
                [0.01]
            ]
        };
        
        this.biases = {
            hidden: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
            output: [0.01]
        };
    }

    sigmoid(x) {
        return 1 / (1 + Math.exp(-x));
    }

    forward(inputs) {
        if (!Array.isArray(inputs)) {
            console.error('Invalid input format');
            return 0;
        }

        // Hidden layer computation
        const hiddenOutputs = this.weights.inputHidden.map((weights, i) => {
            const sum = weights.reduce((acc, weight, j) => 
                acc + weight * (inputs[j] || 0), 0) + this.biases.hidden[i];
            return this.sigmoid(sum);
        });

        // Output layer computation
        const outputSum = this.weights.hiddenOutput.reduce((acc, weights, i) => 
            acc + weights[0] * hiddenOutputs[i], 0) + this.biases.output[0];
        
        return this.sigmoid(outputSum);
    }

    predict(inputs) {
        return this.forward(inputs);
    }

    normalize(value, min, max) {
        return (value - min) / (max - min);
    }
}

// Make available globally
window.NeuralNetwork = NeuralNetwork;