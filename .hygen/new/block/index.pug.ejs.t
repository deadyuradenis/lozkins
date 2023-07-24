---
to: <%= absPath %>/index.pug
---
include /core/lib/layout/index.pug

mixin <%=h.changeCase.camel(name)%>(props = { class: [], attrs: {} })
    -
        let classes = ['<%=name%>'];
        let attrs = props.attrs ? props.attrs : {};

        if (Array.isArray(props.class)) {
            props.class.forEach((key) => {
                classes.push(key);
            })
        }

    div(class= classes,)&attributes(attrs)
