const listaSelect = ["pendente", "andamento", "concluida"]//.slice(2)

 listaSelect.forEach(function(status) {
          let primeiraMaiuscula = status.charAt(0).toUpperCase()

          let sliceNoStatus = status.slice(1)

          let palavraCompleta = primeiraMaiuscula + sliceNoStatus

          console.log("Palavra Completa Minuscula: " + status)
          console.log("Aplicando ChartAt(0): " + primeiraMaiuscula)
          console.log("Aplicando Slice(1): " + sliceNoStatus)
          console.log("Palavra Completa Maiuscula: " + palavraCompleta)
    })


