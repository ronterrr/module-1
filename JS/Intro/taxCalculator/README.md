## Tax Calculator

1. PAYE (Pay As You Earn) -> Gross Salary Band.
2. NSSF Tier 1 & Tier 2 (National Social Security Fund) -> Has a maximum amount that can be deducted.
3. SHIF -> 2.75% of Gross Salary 
4. Housing Levy -> 2.75% of Gross Salary
5. Personal Relief -> 2400

## Project Breakdown

1. Ask user for how much they have
2. PAYE calculation
3. NSSF calculation
4. SHIF calculation
5. Housing Levy calculation

**Gross Salary**
- Prompt -> "Enteer your gross salary"
- Check if its a number
- Check if its a number greater than 0
- Loop to ensure you get the correct salary

**NSSF**
- Tier 1 -> first 9000ksh is 6%
- Tier 2 -> from 9000 to 108,000ksh -> 6%
- Max is -> 6,480
Note: Employer matches the employee's contribution -> combined will be employee + employer

eg
Earns 8k. 6% of 8k -> 480ksh
Employee will contribute 480ksh
Employer will contribute 480ksh

**SHIF**
- 2.75% of the user's gross income

**Housing Levy**
- 1.5% of the user's gross income