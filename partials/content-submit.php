<div id="wrapper">
	<!-- Start Content Overview Header --> 
	<div class="pure-g-r push-top-10">

		<div class="pure-u-1">

			<div class="inner-box">
				<h2>{{PageTitle}}</h2>

		    	
			    <form id="login-form" class="pure-form pure-form-aligned">


				    <fieldset>

				    	<div class="pure-control-group">
				            <label for="organization-name">Name</label>
				            <input type="text"  name="OrganizationName" id="organization-name" placeholder="ex. My Club" />
				        </div>

				        <div class="pure-control-group">
				            <label for="organization-category">Category</label>
				            <input type="text"  name="OrganizationCategory" id="organization-category" placeholder="ex. Crossfit" />
				        </div>

				        <div class="pure-control-group">
				            <label for="organization-keywords">Keywords</label>
				            <input type="text" name="OrganizationKeywords" id="organization-keywords" placeholder="ex. running, jogging, beer" />
				        </div>

				        <div class="pure-control-group">
				            <label for="organization-website">Website</label>
				            <input type="text" name="OrganizationWebsite" id="organization-website" placeholder="ex. www.myclub.com" />
				        </div>

				        <div class="pure-control-group">
				            <label for="organization-description">Description</label>
				            <textarea name="OrganizationDescription" id="organization-description" placeholder="ex. This is my club" style="width:400px;height:100px"></textarea>
				        </div>


				        <div class="pure-control-group">
				            <h4>What days do you guys meet?</h4>
				            <ul>
					            <li>
					            	<input type="checkbox" name="Monday" /> <label>Monday</label>
					            	<ul>
					            		<li><input type="text" name="MondayFromTime"/></li>
					            		<li><input type="text" name="MondayToTime" /></li>
					            </li>
					            <li><input type="checkbox" name="Tuesday" /> <label>Tuesday</label></li>
					            <li><input type="checkbox" name="Wednesday" /> <label>Wednesday</label></li>
					            <li><input type="checkbox" name="Thursday" /> <label>Thursday</label></li>
					            <li><input type="checkbox" name="Friday" /> <label>Friday</label></li>
					            <li><input type="checkbox" name="Saturday" /> <label>Saturday</label></li>
					            <li><input type="checkbox" name="Sunday" /> <label>Sunday</label></li>
				            </ul>
				           
				        </div>





				        <button type="submit" class="pure-button pure-button-primary">{{SubmitButtonText}}</button>

				       
					</fieldset>

				</form>
		    </div>

	    </div>

    </div>
	<!-- End Content Overview Header --> 
</div>

