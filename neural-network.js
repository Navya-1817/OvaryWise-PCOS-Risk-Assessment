class NeuralNetwork {
    constructor(inputSize = 10, hiddenSize = 8, outputSize = 1) {
        this.weights = {
            inputHidden: [
                [0.1, -0.2, 0.3, -0.4, 0.5, -0.6, 0.7, -0.8],
                [-0.1, 0.2, -0.3, 0.4, -0.5, 0.6, -0.7, 0.8],
                [0.2, -0.1, 0.4, -0.3, 0.6, -0.5, 0.8, -0.7],
                [-0.2, 0.1, -0.4, 0.3, -0.6, 0.5, -0.8, 0.7],
                [0.3, -0.4, 0.5, -0.6, 0.7, -0.8, 0.9, -1.0],
                [-0.3, 0.4, -0.5, 0.6, -0.7, 0.8, -0.9, 1.0],
                [0.4, -0.3, 0.6, -0.5, 0.8, -0.7, 1.0, -0.9],
                [-0.4, 0.3, -0.6, 0.5, -0.8, 0.7, -1.0, 0.9],
                [0.5, -0.6, 0.7, -0.8, 0.9, -1.0, 1.1, -1.2],
                [-0.5, 0.6, -0.7, 0.8, -0.9, 1.0, -1.1, 1.2]
            ],
            hiddenOutput: [
                [0.2],
                [-0.2],
                [0.3],
                [-0.3],
                [0.4],
                [-0.4],
                [0.5],
                [-0.5]
            ]
        };
        
        this.biases = {
            hidden: [0.1, -0.1, 0.2, -0.2, 0.3, -0.3, 0.4, -0.4],
            output: [0.1]
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

        const hiddenOutputs = this.weights.inputHidden.map((weights, i) => {
            const sum = weights.reduce((acc, weight, j) => 
                acc + weight * (inputs[j] || 0), 0) + this.biases.hidden[i];
            return this.sigmoid(sum);
        });

        const outputSum = this.weights.hiddenOutput.reduce((acc, weights, i) => 
            acc + weights[0] * hiddenOutputs[i], 0) + this.biases.output[0];
        
        return this.sigmoid(outputSum);
    }

    predict(inputs) {
        return this.forward(inputs);
    }
}

window.NeuralNetwork = NeuralNetwork;