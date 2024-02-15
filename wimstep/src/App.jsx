
import 'flowbite';

function App() {

  return (
    <>
      <div className='font-proxima min-h-screen w-full justify-center items-center px-10 py-8 bg-gray-50'>
        
        <div className='flex gap-2 items-center justify-center flex-col'>
        <img className='text-center' src='/logo.png' width={100}/>
        <h1 className="text-[#36a9e1] mb-8 font-bold text-4xl text-center font-proximaxbold">Documentation</h1>
        </div>
         <hr className="w-48 h-1 font-bold mx-auto my-1 bg-gray-300 border-0 rounded md:my-5 dark:bg-gray-700"/>
     

<div className='container-fluid w-full md:w-3/4  px-5 md:px-6 mx-auto'>

  
  <h2 id="accordion-flush-heading-1">
    <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500  dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span className='font-bold text-xl'>Comment supprimer votre compte WIM?</span>
     
    </button>
  </h2>

  
<ol className="relative border-s border-gray-300 dark:border-gray-700">                  
    <li className="mb-10 ms-4">
        <div className=" absolute w-3 h-3 bg-[#36a9e1] rounded-full -mt-0 -start-1.5 border border-gray-50 dark:border-gray-900 dark:bg-gray-700"></div>
<div className='-translate-y-1'>
<time className="mb-1 -translate-y-5 text-sm font-proximabold leading-none text-gray-500 font-bold hover:text-[#36a9e1] dark:text-gray-500">Etape 1</time>
       <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Ouvrez l'application et cliquez sur l'icône Profil dans la barre de menu.</p>
</div>
        
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-[#36a9e1] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-proximabold  leading-none text-gray-500 font-bold dark:text-gray-500">Etape 2</time>
       <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Faites défiler l'interface vers le bas et sélectionnez l'option « Suppression de compte ».</p>
        
    </li>

    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-[#36a9e1] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-proximabold  leading-none text-gray-500 font-bold dark:text-gray-500">Etape 3</time>
       <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Sur la page suivante, reconnectez-vous en utilisant la méthode de connexion initiale pour prouver que le compte vous appartient..</p>
        
    </li>


    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-[#36a9e1] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-proximabold  leading-none text-gray-500 font-bold dark:text-gray-500">Etape 4</time>
       <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Après une reconnexion réussie, vous verrez un avertissement indiquant que la suppression de votre compte sera définitive, incluant la perte de toutes vos données. Vous devrez créer un nouveau compte si vous souhaitez utiliser WIM à l'avenir.</p>
        
    </li>

    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-[#36a9e1] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-proximabold leading-none text-gray-500 font-bold dark:text-gray-500">Etape 5</time>
       <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Pour confirmer la suppression, cliquez sur le bouton de suppression situé en bas de cet avertissement.</p>
        
    </li>

    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-[#36a9e1] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-proximabold leading-none text-gray-500 font-bold dark:text-gray-500">Etape 6</time>
       <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Après quelques instants, votre compte et toutes vos données seront effacés, et vous serez redirigé vers l'écran d'accueil de l'application.</p>
        
    </li>


   


  

   
</ol>

<p className='mt-3 font-proxima'>
    
En suivant ces étapes, vous pourrez facilement supprimer votre compte WIM de manière sécurisée et définitive.
</p>



 
  


</div>
      </div>
    </>
  )
}

export default App
