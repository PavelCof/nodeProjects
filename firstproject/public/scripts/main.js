(async function() {
    let modules="./EDCScripts.js";
    let module=await import(modules);
    let id=module.id$('findFilters');
    import './css/style.css'
    console.log(id);




    

})();

