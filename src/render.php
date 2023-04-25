<?php
$initial = $attributes['initialImage'];
$links = array("/wp-content/uploads/2014/01/spectacles.gif" => 1, "/wp-content/uploads/2014/01/dsc20050315_145007_132.jpg" => 2);
?>

<div>
    <select class="dynamic-dropdown">
        <?php foreach ($links as $link => $i) {
            $selected = $initial == $link ? 'selected' : '';
            echo "<option value='$link' label='option$i' $selected>Option $i</option>";
        }
        ?>
    </select>
    <img id="renderedImage" src="<?php echo $initial ?>" />
</div>