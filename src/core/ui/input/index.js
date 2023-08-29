import IMask from 'imask';
import './index.scss';

const initInputComponent = (componentNode) => {
    const component = componentNode;

    if (!component) {
        // console.debug()
        return;
    }

    const input = component.querySelector('[data-input="native"]')
    const mask = input.getAttribute('data-mask') ? input.getAttribute('data-mask') : 'default';
    const required = input.getAttribute('data-required') ? input.getAttribute('data-required') : false;

    const status = {
        add: (statusName) => {
            if(component.classList.contains('.input')){
                component.classList.add(`is-${statusName}`);
            } else{
                component.closest('.input').classList.add(`is-${statusName}`);
            }
        },
        remove: (statusName) => {
            if(component.classList.contains('.input')){
                component.classList.remove(`is-${statusName}`);
            } else{
                component.closest('.input').classList.remove(`is-${statusName}`);
            }
        }
    }

    const setMask = {
        numbers: () => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/\D/g, '');
            })
        },
        letters: () => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
            })
        },
        phone: () => {
            const phoneMaskSettings = {
                mask: [
                    {
                    mask: '8 (000) 000-00-00',
                    startsWith: '8',
                    lazy: true,
                    },
                    {
                    mask: '+{7} (000) 000-00-00',
                    startsWith: '7',
                    lazy: true,
                    },
                    {
                    mask: '+{7} (000) 000-00-00',
                    startsWith: '',
                    lazy: true,
                    },
                    {
                    mask: '+{7} (000) 000-00-00',
                    startsWith: '9',
                    lazy: true,
                    },
                ],
                dispatch(appended, dynamicMasked) {
                    const number = (dynamicMasked.value + appended).replace(/\D/g, '');
            
                    return dynamicMasked.compiledMasks.find((m) => number.indexOf(m.startsWith) === 0) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
                },
            };

            IMask(input, phoneMaskSettings)
        }, 
        mail: () => {
            
        }
    }
  
    const initMask = () => {
        switch (mask) {
            case 'mail':
                setMask.mail()
                break;

            case 'letters':
                setMask.letters()
                break;

            case 'numbers':
                setMask.numbers()
                break;
        
            case 'phone':
                setMask.phone()
                break;
        
            default:
                break;
        }
    }

    const validateMask = () => {
        switch (mask) {
            case 'mail':
                const regexpMail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                return regexpMail.test(input.value);
        
            case 'phone':
                const regexpPhone = new RegExp('(7|8)\\s[\(][0-9]{3}[\)]\\s[0-9]{3}[\-][0-9]{2}[\-][0-9]{2}');
                return regexpPhone.test(input.value);
        
            default:
                return input.value !== '';
        }
    }
  
    const check = () => {
        if (required) {
            const result = validateMask()

            if (result) {
                status.remove('error')
            } else {
                status.add('error')
            }
        }

        if(input.value !== '') {
            status.add('filled')
        } else {
            status.remove('filled')
        }
    }
    
    initMask()

    // Events

    input.addEventListener('input', () => {
    })

    input.addEventListener('blur', () => {
        status.remove('focused')
        check()
    })

    input.addEventListener('focus', () => {
        status.remove('error')
        status.remove('filled')
        status.add('focused')
    })
};


const inputs = () => {
    const componentNodes = Array.from(document.querySelectorAll('[data-component="input"]'));

    componentNodes.forEach(initInputComponent);
}

export default inputs;