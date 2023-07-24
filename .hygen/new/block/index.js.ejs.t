---
to: <%= absPath %>/index.js
---
import './index.scss';

const <%=h.changeCase.camel(name)%> = (componentNode) => {
    const component = componentNode;

    if (!component) {
        // console.debug()
        return;
    }

};

export default <%=h.changeCase.camel(name)%>;
