import React from "react";
import TagsInput from "react-tagsinput";

const KeywordsForm = ({ button, tags, handleChange, onSubmit }) => {
  return (
    <form
      style={{ paddingTop: "1rem" }}
      onSubmit={onSubmit}
      id="keywords"
      noValidate
    >
      <fieldset disabled={button.formdisabled}>
        <div className="row">
          <div className="col-md-12">
            <div className="card tag-card">
              <TagsInput
                value={tags}
                onChange={handleChange}
                disabled={button.disabled}
                maxTags={10}
                onlyUnique={true}
                inputProps={
                  tags.length === 10
                    ? {
                        className: "react-tagsinput-input",
                        placeholder: "Max reach"
                      }
                    : {
                        className: "react-tagsinput-input",
                        placeholder:
                          "Add up to 10 tags. Enter each tag followed by ENTER key"
                      }
                }
              />
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default KeywordsForm;
