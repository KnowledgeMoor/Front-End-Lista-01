window.addEventListener("load", function () {

    sumAges = (vet) => {
        sum = 0;
        for (i = 0; i < vet.length; i++) sum += vet[i];
        return sum;
    }
    vetAges = [10, 21, 31, 40];
    document.getElementById("soma").innerHTML = sumAges(vetAges);


    solucao_a = document.getElementById("solucao_a");
    solucao_b = document.getElementById("solucao_b");
    solucao_c = document.getElementById("solucao_c");
    solucao_d = document.getElementById("solucao_d");
    solucao_e = document.getElementById("solucao_e");
    solucao_f = document.getElementById("solucao_f");
    solucao_g = document.getElementById("solucao_g");

    // Problema a
    media = vet => {
        sum = 0;
        for (let i = 0; i < vet.length; i++) sum += vet[i];
        return sum / vet.length;
    }
    solucao_a.innerHTML = media(vetAges);

    // Problema b
    maior = vet => {
        big = vet[0];
        for (let i = 1; i < vet.length; i++) {
            if (vet[i] > big) big = vet[i];
        }
        return big;
    }
    solucao_b.innerHTML = maior(vetAges);

    // Problema c
    impar = vet => {
        newVet = [];
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] % 2 != 0) newVet.push(vet[i]);
        }
        return newVet;
    }
    solucao_c.innerHTML = impar(vetAges);

    // Problema d
    maiorDeIdade = vet => {
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] < 18) {
                return false;
            }
        }
        return true;
    }
    solucao_d.innerHTML = maiorDeIdade(vetAges);


    // Problemas com user input
    userInput = document.getElementById("user_input");
    userInput.addEventListener("input", function () {
        // Problema e
        maiorDoQue = vet => {
            for (let i = 0; i < vet.length; i++) {
                if (vet[i] < userInput.value) {
                    return false;
                }
            }
            return true;
        }
        solucao_e.innerHTML = maiorDoQue(vetAges);

        // Problema f
        exibirMaiorOuIgual = vet => {
            var newVet = [];
            for (let i = 0; i < vet.length; i++) {
                if (vet[i] >= userInput.value) {
                    newVet.push(vet[i]);
                }
            }
            return newVet;
        }
        solucao_f.innerHTML = exibirMaiorOuIgual(vetAges);

        // Problema g
        vet = exibirMaiorOuIgual(vetAges);
        vetSum = sumAges(vet);
        solucao_g.innerHTML = vetSum / vet.length;
    });
});