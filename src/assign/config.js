export const DETAILS =  {
  Left: [
    { name: 'ID', key: 'id', type: 'text' },
    { name: 'First Name', key: 'firstName', type: 'text' , placeholder: 'Enter First Name' },
    { name: 'Last Name', key: 'lastName', type: 'text', placeholder: 'Enter Last Name' },
    { name: 'Email Address', key: 'email', type: 'email', placeholder: 'Enter Email Address' },
    { name: 'Phone', key: 'phone', type: 'tel' }
  ],
  Right: [
    { name: 'Seeking Job', key: 'jobSeeking', placeholder: 'select', type: 'select', options: ['Actively Applying', 'Not open to offers', 'Not Interested at all', 'Start Looking'] },
    { name: 'Age', key: 'age', type: 'text', placeholder: 'Enter Age' },
    { name: 'Work Remotely', key: 'workRemotely', type: 'button' },
    { name: 'Joining Date', key: 'date', type: 'text'},
    { name: 'Address', key: 'address', type: 'textarea', placeholder: 'Enter Address' }
  ]
};
