import PetProfile from "../../components/PetProfile/PetProfile";

function PetsProfile(){
    return (
    <div className="separator">
    <h1>Pet Health Record Template</h1>
    <h2>Pet Information</h2>
    <PetProfile
      name='Fluffy'
      race='bear'
      breed='grizzly'
      weight='500kg'
      birth={new Date("1992-07-14")}
      picture="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    />
    <PetProfile
      name='Porky'
      race='pig'
      breed='mini'
      weight='20kg'
      birth={new Date("2015-07-14")}
      picture="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/feed/feednavigator.com/article/2019/04/01/enzymes-and-feed-efficiency-in-pigs/9320883-8-eng-GB/Enzymes-and-feed-efficiency-in-pigs_wrbm_large.jpg"
    />
    </div>
    )
}

export default PetsProfile;