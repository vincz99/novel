import React from 'react';

function Section() {
  return(
    // top
    <div>

    <div className='Section-div'>
<h3>updates</h3>

<div className='Selection-button'>
<select  name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>
 </div>
     </div>




    </div>
    // bottom
  )
}

export default Section;
