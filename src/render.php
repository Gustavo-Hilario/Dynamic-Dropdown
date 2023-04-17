<?php
$initial = $attributes['initialImage'];
?>

<div>
    <select class="dynamic-dropdown">
        <option value="/wp-content/uploads/2014/01/spectacles.gif" label="option1">Option 1</option>
        <option value="/wp-content/uploads/2014/01/dsc20050315_145007_132.jpg" label="option2">Option 2</option>
    </select>
    <img id="renderedImage" src="<?php echo $initial ?>" />
</div>