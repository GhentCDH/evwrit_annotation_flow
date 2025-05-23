# Rules

| type annotatie     | SanitizeRule | annotation_text_rule | tokenize_rule | DuplicatesRule |
|--------------------|--------------|----------------------|---------------|----------------|
| language           | ✓            |                      | ✓             | ✓              |
| typography         | ✓            | ✓                    | ✓             | ✓              |
| orthography        | ✓            | ✓                    | ✓             | ✓              |
| lexis              | ✓            |                      | ✓             | ✓              |
| morpho_syntactical | ✓            | ✓                    | ✓             | ✓              |
| handshift          | ✓            |                      | ✓             | ✓              |

## Duplicates rule

Controleert indien er meerdere annotaties met hetzelfde het annotatietype, start- en eindposities zijn.

## SanitizeRule

Garandeert dat de indexen minimaal 0 zijn en kleiner dan de totale lengte van de tekst.

## annotation_text_rule

Probeert de tekst die is gekoppeld aan een annotatie overeen te laten komen met de volledige tekst en wijzigt de start-
en stopindexen van de tekens.

Met een maximale shift van 3 tekens

## tokenize_rule

Tokenize de tekst en zoek het dichtstbijzijnde tokenstartpunt en -eindpunt bij de opgegeven annotatie-start/stop. De
maximale verschuiving die is toegestaan om karakterindexen aan te passen, wordt bepaald door max_shift. Als er geen
tokenstart- of eindpunt wordt gevonden nadat de indexen met maximaal max_shift posities zijn verschoven, voert de regel
geen wijzigingen door.

Default max_shift: 3 tekens
