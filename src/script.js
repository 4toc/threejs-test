import "./style.css"
import { World } from "./World/World.js"

function main() {
  const container = document.querySelector("#scene-container")

  const world = new World(container)

  const btn = document.querySelector("#btnClick")
  btn.addEventListener("click", () => {
    world.render()
  })
}

main()
