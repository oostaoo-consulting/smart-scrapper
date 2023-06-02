# MLD :

**SEARCH** (**search_num**, location, terms)

**PROFILE** (**profile_num**, github_login)

---

# Data Dictionary

## SEARCH
An entity to save searches
| Field Name | Type | Specificity | Description |
| --- | --- | --- | --- |
| id | INTEGER | PRIMARY KEY, NOT NULL, AUTO_INCREMENT | The unique search identifier |
| location | TEXT | DEFAULT "Paris" | Location (city or country) of the search |
| terms | TEXT | | Terms used for the search |

## PROFILE
An entity to archive profiles
| Field Name | Type | Specificity | Description |
| --- | --- | --- | --- |
| id | INTEGER | PRIMARY KEY, NOT NULL, AUTO_INCREMENT | The unique profile identifier |
| github_login | TEXT | NOT NULL | The Github login identifier of the profile |