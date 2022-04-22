console.log('survey.js')

let checkLst = []
var itemForm = document.getElementById("itemForm")
var checkBoxes = itemForm.querySelectorAll('input[type=checkbox]')
var recommend

document.getElementById("submit").addEventListener("click", function() {
    object = {
        name: document.getElementById('name').value,
        mail: document.getElementById('email').value,
        age: document.getElementById('age').value,
        profession: document.getElementById('role').value,
        recommend: recommend,
        programming_languages: checkLst,
        comment: document.getElementById('comment').value,
    }

    checkLst = []
    checkBoxes.forEach(item => {
        if(item.checked) {
            checkLst.push(item.value)
        }
    })
    object.programming_languages = checkLst
    object.recommend = document.querySelector('input[name=recommend]:checked').value
    console.log(object)
    alert('Thank you for submitting the survey!')
})