const chatFrom = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages')
const socket = io()

//message from server
socket.on('message', message => {
    console.log(message)
    outputMessage(message)

    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight
})

//Message submit
chatFrom.addEventListener('submit', (e) => {
    e.preventDefault()

    const msg = e.target.elements.msg.value

    //Emit message to server
    socket.emit('chatMessage', msg)

    //Clear input
    e.target.elements.msg.value = ''
    e.target.elements.msg.focus
})

// Output messqage to DOM

function outputMessage(message) {
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `<p class="meta">Brad <span>9:12pm</span></p>
    <p class="text">
       ${message}
    </p>`
    document.querySelector('.chat-messages').appendChild(div)
}