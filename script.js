var _a;
// for element listinig:
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // type assertion 
    var profilePictureinput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    var usernameElemnent = document.getElementById("username");
    if (profilePictureinput && nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement && usernameElemnent) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var username = usernameElemnent.value;
        var uniquepath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // for image 
        var profilePictureFile = (_a = profilePictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // for output:
        var resumeOutput = "\n    <h2>Resume :</h2>\n    ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"profile picture\" class=\"profilePicture\" ") : "", "\n    <p><strong>NAME :</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span></p>\n    <p><strong>EMAIL :</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>NUMBER :</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n\n    <h3>EDUCATION</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n    <h3>SKILLS</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n    <h3>EXPERIENCE</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    ");
        // for download:
        var downloadLink = document.createElement("a");
        downloadLink.href = 'data:text/html;charset=utf-8, ' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquepath;
        downloadLink.textContent = "Download your resume";
        // for output:
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
            makeEditable();
        }
        else {
            console.error("resume Output element not found");
        }
    }
    else {
        console.error('one or more elements not found');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace element
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editable-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent + input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
