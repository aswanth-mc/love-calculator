function calculateLove() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    const result = document.getElementById('result');
    const message = document.getElementById('message');

    if (!name1 || !name2){
        alert('Please enter both names!');
        return;
    }

    const combinded =(name1+name2)
    let loveScore = 0;

    for (let i =0 ;i<combinded.length;i++){
        loveScore += combinded.charCodeAt(i);
    }
    const percentage = loveScore % 101;

    result.innerText = `Love Score: ${percentage}%`;

    // Message logic
    if (percentage <= 30) {
        message.innerText = "Hmm… better stay friends 😅";
    } 
    else if (percentage <= 60) {
        message.innerText = "There’s potential 👀";
    } 
    else if (percentage <= 85) {
        message.innerText = "Strong connection ❤️";
    } 
    else {
        message.innerText = "Perfect match! 💍🔥";
    }
}

function resetCalculator() {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result").innerText = "Love Score: --%";
    document.getElementById("message").innerText = "";
}
