---
to: <%= absPath %>/index.js
---
import './index.scss';

const <%=h.changeCase.camel(name)%> = () => {

};

export default <%=h.changeCase.camel(name)%>;
