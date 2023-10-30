



const submitInfoEl = document.querySelector("#submitInfo")
const infoElArr = document.querySelectorAll(".info")
const infoDivEl = document.querySelector("#infoDiv")

let infoArr = []


const vareVelgingDivEl = document.querySelector("#vareVelging")
const vareElArr = document.querySelectorAll(".vare")
const leggTilButtonEl = document.querySelector("#leggTil")
const submitVarerEl = document.querySelector("#submitVarer")

const varerArr = []


const kvitteringDivEl = document.querySelector("#kvittering")
const kvitteringGridEl = document.querySelector("#kvVarer")

submitInfoEl.onclick = () => {
    const infoElArrCopy = [...infoElArr]

    infoArr = infoElArrCopy.map(e => e.value)

    infoDivEl.style.display = "none"
    vareVelgingDivEl.style.display = "flex"
}

leggTilButtonEl.onclick = () => {
    const vareElArrCopy = [...vareElArr]

    const vareValues = vareElArrCopy.map(e => e.value)

    varerArr.push(vareValues)

    vareElArr.forEach(element => {
        element.value = ""
    })
}

const kvRorleggerNavnEl = document.querySelector("#kvRorleggerNavn")
const kvKundeNavnEl = document.querySelector("#kvKundeNavn")
const kvOppdragsNummerEl = document.querySelector("#kvOppdragsNummer")
const kvDatoEl = document.querySelector("#kvDato")
const kvSumAltEl = document.querySelector("#kvSumAlt")
const kvFortjenesteEl = document.querySelector("#kvFortjeneste")
const kvMvaEL = document.querySelector("#kvMva")

function makeVareKv(vare) {
    const vareDivEl = document.createElement("div")

    vare.forEach((e, index) => {
        const element = document.createElement(index === 0 ? "h3" : "p")
        element.innerText = index === 0 ? e : index === 1 ? `Pris per: ${e}` : `Antall: ${e}`
        vareDivEl.appendChild(element)
    });

    const sum = Number(vare[1]) * Number(vare[2])
    const sumEl = document.createElement("p")
    sumEl.innerText = `Sum: ${sum}`
    vareDivEl.appendChild(sumEl)

    const fortjeneste = sum * .2
    const fortjenesteEl = document.createElement("p")
    fortjenesteEl.innerText = `Fortjeneste: ${fortjeneste}`
    vareDivEl.appendChild(fortjenesteEl)

    const mva = sum * .25 + fortjeneste
    const mvaEl = document.createElement("p")
    mvaEl.innerText = `Mva: ${mva}`
    vareDivEl.appendChild(mvaEl)

    return vareDivEl
}

function updateKvittering() {

    kvRorleggerNavnEl.innerHTML = `Rørleggernavn: ${infoArr[0]}`
    kvKundeNavnEl.innerHTML = `Kundenavn: ${infoArr[1]}`
    kvOppdragsNummerEl.innerHTML = `Oppdragsnummer: ${infoArr[2]}`
    kvDatoEl.innerHTML = `Start dato: ${infoArr[3]}`

    let sum = 0
    varerArr.forEach(element => {sum += element[1] * element[2]})

    const fortjeneste = sum * .2
    const mva = sum * .25 + fortjeneste

    kvSumAltEl.innerHTML = `Sum alt: ${sum}`
    kvFortjenesteEl.innerHTML = `Fortjeneste: ${fortjeneste}`
    kvMvaEL.innerHTML = `Mva: ${mva}`

    varerArr.forEach(vare => {
        
        const vareDiv = makeVareKv(vare)
        kvitteringGridEl.appendChild(vareDiv)

    });

}

submitVarerEl.onclick = () => {
    
    vareVelgingDivEl.style.display = "none"
    
    updateKvittering()

    kvitteringDivEl.style.display = "flex"


}