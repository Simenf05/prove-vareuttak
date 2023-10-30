



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

function updateKvittering() {

    kvitteringDivEl.innerHTML = "heihei"

}

submitVarerEl.onclick = () => {
    
    vareVelgingDivEl.style.display = "none"
    
    updateKvittering()

    kvitteringDivEl.style.display = "flex"


}