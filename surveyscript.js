// Function to show/hide next question based on user input
function showNextQuestion(questionId, showDivId, hideDivId) {
    let selectedValue = document.getElementById(questionId).value;
    
    if (selectedValue === "yes") {
        document.getElementById(showDivId).style.display = "block";
        document.getElementById(hideDivId).style.display = "none";
    } else if (selectedValue === "no") {
        document.getElementById(showDivId).style.display = "none";
        document.getElementById(hideDivId).style.display = "block";
    } else {
        document.getElementById(showDivId).style.display = "none";
        document.getElementById(hideDivId).style.display = "none";
    }
}

// Handle form submission
document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Survey submitted successfully!");
});