export default {

    beforeMount(el, binding, vnode) {

        console.log(binding, vnode);

        let current = 0;
        let increments = binding.value ?? 90;
        let effect;

        el.addEventListener('dblclick', function() {
            
            if (!binding.arg || binding.arg === 'rotate') {
                if (binding.modifiers.reverse) {
                    current -= increments;
                } else {
                    current += increments;
                }

                effect = `rotate(${current}deg)`;

            } else if (binding.arg === 'scale') {

                effect = `scale(${increments})`;

            }

            el.style.transform = effect;

            if (binding.modifiers.animate) el.style.transition = 'transform 0.5s';
        })
    }
}