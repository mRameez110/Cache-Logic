const taskMailTemplate = (title, description, createdBy, assignedTo) => 
  
  `
<div>
      
     <h4><strong>Task Title:</strong> ${title}</h4>
     <p><strong>Task Description:</strong> ${description}</p>
      <p><strong>Task Created By:</strong> ${createdBy}</p>
     <p><strong>Task Assigned To:</strong> ${assignedTo}</p>
</div>
 `;
