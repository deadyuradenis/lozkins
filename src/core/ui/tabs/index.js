import './index.scss';

const initTabsComponent = (componentNode) => {
    const block = componentNode;
    
    const links = Array.from(block.querySelectorAll('[data-tab="link"]'));
    const items = Array.from(block.querySelectorAll('[data-tab="item"]'));
	const activeClass = 'is-active';
    
    if (!block || !links.length || !items.length) {
        // console.debug()
        return;
    }

    const checkActveLink = () => {
        if (!block.querySelector(`[data-tab="link"].${activeClass}`)){
            Array.from(block.querySelectorAll('[data-tab="link"]'))[0].classList.add(activeClass);
        }

        const activeLink = block.querySelector(`[data-tab="link"].${activeClass}`);
        const activeIndex = activeLink.getAttribute('data-tab-id');
        
        if(block.querySelector(`[data-tab="item"][data-tab-id="${activeIndex}"]`)){
            block.querySelector(`[data-tab="item"][data-tab-id="${activeIndex}"]`).classList.add(activeClass);
        }
    }

	const initTabs = () => {
		const initGroup = (group) => {
			group.forEach((groupItem, index) => {
                groupItem.setAttribute('data-tab-id', index);
			})
		}

        initGroup(links);
        initGroup(items);
        checkActveLink();
	}
 
    const clear = () => {
		links.forEach(link => {
            link.classList.remove(activeClass);
		})
		
		items.forEach(item => {
            item.classList.remove(activeClass);
		})
    }

    initTabs()

	links.forEach((link, index) => {
		link.onclick = () => {
			clear()
            link.classList.add(activeClass);

            if(block.querySelector(`[data-tab="item"][data-tab-id="${index}"]`)){
                block.querySelector(`[data-tab="item"][data-tab-id="${index}"]`).classList.add(activeClass);
            }
		}

        if(links.length < 2){
            link[0].classList.add(activeClass);

            const id = link[0].getAttribute('data-tab-id');

            if(block.querySelector(`[data-tab="item"][data-tab-id="${id}"]`)){
                block.querySelector(`[data-tab="item"][data-tab-id="${id}"]`).classList.add(activeClass);
            }
        }
    })

}  

const tabs = () => {
    const componentNodes = Array.from(document.querySelectorAll('[data-component="tabs"]'));

    componentNodes.forEach(initTabsComponent);
}

export default tabs;