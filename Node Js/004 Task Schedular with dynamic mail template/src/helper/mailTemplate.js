const taskMailTemplate = (
	title,
	description,
	createdBy,
	assignedTo
) => `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: black;">

<h2 style="color: green;">Task Notification</h2>
<h4><strong>Task Title:</strong> ${title}</h4>
<p><strong>Task Description:</strong> ${description}</p>



</div>`;
