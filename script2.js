function submitRooms() {
    // Get the form
    const form = document.getElementById('roomForm');

    // Check if at least one checkbox is selected
    const checkboxes = document.querySelectorAll('input[name="room"]:checked');
    if (checkboxes.length > 0) {
        // Submit the form
        form.submit();
    } else {
        alert('กรุณาเลือกห้องอย่างน้อยหนึ่งห้อง'); // "Please select at least one room"
    }
}
