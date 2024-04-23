// import * as d3 from "d3"

const createMsg = (context: string, class_name: string, parent: HTMLElement) => {
  const msg = document.createElement("div")
  msg.classList.add("msg")
  msg.classList.add(class_name)
  const resp = [
    "This is a great question biueqhwiuehqiehqiheiqhiehqwiheut I don't know the answer :)))",
    "I really don't know -.-",
    "Google is free out there =.=",
    "Try to find out by yourself =.-",
    "Ask your mom...",
  ]
  if (class_name == "user-msg") {
    msg.innerHTML = context.toString()
  } else {
    const rand = Math.floor(Math.random() * 5)
    msg.innerHTML = resp[rand]
  }
  parent.appendChild(msg)
}
document.addEventListener("nav", () => {
  console.log("load done chat compo")
  const body = document.querySelector(".body") as HTMLElement

  const sendBtn = document.querySelector(".footer-btn") as HTMLElement
  const userinp = document.querySelector(".footer-input") as HTMLInputElement
  //   sendBtn.addEventListener("click", () => {
  //     if (userinp.value) createMsg(userinp.value, "user-msg", body)
  //     createMsg(userinp.value, "bot-msg", body)
  //   })
  userinp.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      if (userinp.value) {
        createMsg(userinp.value, "user-msg", body)
        createMsg(userinp.value, "bot-msg", body)
        userinp.value = ""
      }
    }
  })

  window.addCleanup(() => sendBtn.removeEventListener("click", () => {}))
})
