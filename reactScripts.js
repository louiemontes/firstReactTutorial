var contacts = [
  {key: 1, name: "Luis Montes", email: "louiemontes@gmail.com", description: "front-end adept"},
  {key: 2, name: "Ed", email: "edchambers@piedpiper.com"},
  {key: 3, name: "Omar"},
];

var newContact = {name: "", email: "", description: ""};

var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },

  render: function(){
    return (
      React.createElement('li', {},
        React.createElement('h2', {}, this.props.name),
        React.createElement('a', {href: 'mailto:' + this.props.email}, this.props.email),
        React.createElement('div', {}, this.props.description),
      )
    )
  },
});

var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name (required)',
          value: this.props.contact.name,
        }),
        React.createElement('textarea', {
          placeholder: 'Description',
          value: this.props.contact.description,
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  }
})
var contactItemElements = (contacts
  .filter(function(contact){
    return contact.email })
  .map(function(contact){
    return React.createElement(ContactItem, contact)})
);

var rootElement = (
  React.createElement('div', {},
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {}, contactItemElements),
    React.createElement(ContactForm, {contact: newContact})
  )
);

ReactDOM.render(rootElement, document.getElementById('react-app'));
